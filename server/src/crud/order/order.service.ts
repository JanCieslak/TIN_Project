import { Injectable } from '@nestjs/common';
import { Order } from '../../entities/order.entity';
import { Connection } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { DeleteOrderDto } from './dto/delete-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly connection: Connection) {}

  async getOrders() {
    return await this.connection.manager.query('SELECT * FROM tindb.order;');
  }

  async createOrder(order: CreateOrderDto) {
    const repo = this.connection.getRepository(Order);
    await repo.save(order);
  }

  async deleteOrder(order: DeleteOrderDto) {
    const repo = this.connection.getRepository(Order);
    await repo.delete({ id: order.id });
  }
}