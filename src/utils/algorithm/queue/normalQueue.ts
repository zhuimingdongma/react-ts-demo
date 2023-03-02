/*
 * @Author: 廉恒凯
 * @Date: 2021-01-17 10:28:32
 * @LastEditors: Euls
 * @LastEditTime: 2023-02-28 13:56:10
 * @Description: file content
 */
import { isDefined } from '@utils/index';

interface INormalQueue<T> {
  enqueue(value: T): number; // 入队
  dequeue(): T | null; // 出队列
  peek(): T | null; // 返回队首元素
  clear(): void; // 清空队列
  size(): number; // 队列长度
  empty(): boolean; // 队列是否为空
  toString(): string; // 返回队列元素的组成的字符串
}

class Queue<T> implements INormalQueue<T> {
  private data: T[] = [];

  enqueue = (item: T): number => this.data.push(item);

  dequeue = (): T | null => {
    const value = this.data.shift();
    return !isDefined(value) ? null : value;
  };

  peek = (): T | null => this.data[0];

  size = (): number => this.data.length;

  empty = (): boolean => this.data.length === 0;

  clear = (): void => {
    this.data = [];
  };

  toString = (): string => this.data.toString();
}

export default Queue;