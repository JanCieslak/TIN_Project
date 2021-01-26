import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { DeleteOrderDto } from './dto/delete-order.dto';
import { OrderService } from './order.service';

@Controller('/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getOrders() {
    return await this.orderService.getOrders();
  }

  @Post()
  async createOrder(@Body() order: CreateOrderDto) {
    return await this.orderService.createOrder(order);
  }

  @Delete()
  async deleteOrder(@Body() order: DeleteOrderDto) {
    return await this.orderService.deleteOrder(order);
  }
}
