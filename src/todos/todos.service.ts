
    { 
      throw new NotFoundException('Todo not found');
    }
    return todo;
    
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    await this.findOne(id);
    return this.prisma.todo.update({
      where: {id},
      data: updateTodoDto,
    })
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.todo.delete({
      where: {id},
    });

  }
}
