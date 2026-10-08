import { Controller, Get, Param, Post, Put, Patch, Delete, Body} from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {

    }

    //menampilkan semua data buku
    @Get()
    getBooks(){
        return this.booksService.findAll();
    }

    //menambahkan data buku baru
    @Post()
    createBooks(@Body() createBookDto: CreateBookDto) {
        return this.booksService.create(createBookDto);
    }

    //menampilkan data buku berdasarkan id
    @Get(':id')
    getBookById(@Param('id') id: string): string{
        return `Data buku dengan id ${id} berhasil diperbarui`;
    }

    //update data buku secara keseluruhan
    @Put(':id')
    updateBook(@Param('id') id: string): string {
        return `Data buku dengan id ${id} berhasil diperbarui`;
    }

    //update sebagian data buku
    @Patch(':id')
    patchBook(@Param('id') id: string): string {
        return `Sebagian data buku denga id ${id} berhasil diperbarui`;
    }

    //menghapus data buku
    @Delete(':id')
    deleteBook(@Param('id') id: string): string {
        return `Data buku dengan id ${id} berhasil dihapus`;
    }
}
