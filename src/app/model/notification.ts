export enum NotificationType {
  success = 'is-success',
  danger = 'is-danger',
  warning = 'is-warning',
}

export interface MaNotification {
  message: string;
  type: NotificationType;
}
