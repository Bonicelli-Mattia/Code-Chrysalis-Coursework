/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinTable,
  JoinColumn,
} from "typeorm";
import Account from "./AccountModel";

@Entity({ name: "transactions" })
class Transaction {
  @PrimaryGeneratedColumn("uuid")
  public id: string;
  @Column({ type: "float" })
  public amount: number;
  @Column({ type: "timestamp with time zone" })
  public transactionDate: Date;
  @Column({ nullable: true })
  public description: string;
  @ManyToOne(() => Account, (accounts) => accounts.id)
  public account: Account;
}

export default Transaction;
