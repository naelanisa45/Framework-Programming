import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ){}

    //mencari semua data buku
     async findAll(): Promise<Book[]> {
        return await this.bookRepository.find({
            order:{ createdAt: 'DESC'},
        })
    }

    //menyimpan data buku
    async create(book: CreateBookDto): Promise<Book> {
        const newBook = this.bookRepository.create(book);

        return await this.bookRepository.save(newBook);
    }

}
