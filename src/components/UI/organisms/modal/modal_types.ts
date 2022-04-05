import React, { ReactNode } from 'react';

export interface ModalPropType {
  children?: ReactNode;
  visible: boolean;
  position?: 'top' | 'bottom';
  width: number | string;
  height: number | string;
}