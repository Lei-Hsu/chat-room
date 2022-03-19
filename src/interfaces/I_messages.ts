export interface MessageBox {
  from: 'host' | 'guest';
  text: string;
  time: string;
}