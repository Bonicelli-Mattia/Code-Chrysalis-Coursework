/* eslint-disable prettier/prettier */
import { Entity, OneToMany, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "./UserModel";

@Entity({ name: "accounts" })
class Account {
  @PrimaryGeneratedColumn("uuid")
  public id: string;
  @Column()
  public name: string;
  @ManyToOne(() => User, (users) => users.id)
  public owner: User;
}

export default Account;
