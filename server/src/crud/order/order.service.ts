import { Injectable } from '@nestjs/common';
import { Order } from '../../entities/order.entity';
import { Connection } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { DeleteOrderDto } from './dto/delete-order.dto';
import { Person } from 'src/entities/person.entity';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly connection: Connection) {}

  async getOrders() {
    return await this.connection.manager.query('SELECT * FROM tindb.order;');
  }

  async createOrder(orderDto: CreateOrderDto) {
    const orderRepo = this.connection.getRepository(Order);
    const personRepo = this.connection.getRepository(Person);

    const person = await personRepo.findOne(orderDto.personId);
    
    await orderRepo.save({ orderDate: orderDto.date, person: person });
  }

  async deleteOrder(orderDto: DeleteOrderDto) {
    const repo = this.connection.getRepository(Order);
    await repo.delete({ id: orderDto.id });
  }

  async updateOrder(orderDto: UpdateOrderDto) {
    const orderRepo = this.connection.getRepository(Order);
    const personRepo = this.connection.getRepository(Person);

    const order = await orderRepo.findOne(orderDto.orderId);
    const person = await personRepo.findOne(orderDto.personId);

    order.orderDate = orderDto.date;
    order.person = person;

    await orderRepo.save(order);
  }
}