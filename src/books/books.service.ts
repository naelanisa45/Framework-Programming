import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  // Mencari semua data buku
  async findAll(): Promise<Book[]> {
    return this.bookRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  // Mencari buku berdasarkan ID
  async findById(id: string): Promise<Book> {
    const book = await this.bookRepository.findOne({
      where: { id },
    });

    if (!book) {
      throw new NotFoundException('Buku tidak ditemukan');
    }

    return book;
  }

  // Menyimpan data buku
  async create(body: any): Promise<Book> {
  const author = new Book();
  Object.assign(author, body);

  const savedAuthor = await this.bookRepository.save(author);

  return savedAuthor;
}

  // Memperbarui data buku
  async update(
    id: string,
    updateBook: CreateBookDto,
  ): Promise<Book> {
    const book = await this.findById(id);

    Object.assign(book, updateBook);

    return this.bookRepository.save(book);
  }

  // Menghapus data buku
  async remove(
    id: string,
  ): Promise<{ message: string; deleteId: string }> {
    await this.findById(id);

    await this.bookRepository.softDelete(id);

    return {
      message: `Buku ${id} berhasil dihapus`,
      deleteId: id,
    };
  }
}