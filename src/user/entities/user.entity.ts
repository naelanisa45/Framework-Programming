import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({ name:'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
      id: string;

    @Column({ type: 'varchar', length: 100 })
    nama: string;

    @Column({ type: 'varchar', length: 50 })
    email: string;

    @Column({ type: 'varchar', length: 50 })
    password: string;

    @Column({ type: 'varchar', length: 50 })
    phone: string;

    @Column({ type: 'varchar', length: 50 })
    alamat: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deletedAt: Date;
}
