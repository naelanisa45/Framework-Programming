import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Author } from '../../author/entities/author-entity.js';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 50 })
  isbn: string;

  @Column({ type: 'int', default: 0 })
  publishedYear: number;

  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;

  @OneToOne(() => Author, {cascade:true})
  @JoinColumn({name: 'author_id'})
  author: Author

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date;
}