import React from 'react';
import { cn } from '@/lib/utils';

import {
  Card as ShadcnCard,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Form from './Form';
import SecondaryText from './SecondaryText';

interface CardProps {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className }) => {
  return (
    <ShadcnCard className={cn('w-96 bg-card text-card-foreground rounded-lg shadow-lg', className)}>
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight text-left text-card-foreground">
          Log in
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <Form />
          <SecondaryText />
        </div>
      </CardContent>
    </ShadcnCard>
  );
};

export default Card;
