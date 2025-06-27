import React from 'react';
import { Button } from '@/components/ui/button';

const SecondaryText: React.FC = () => {
  return (
    <p className="text-center text-sm text-card-foreground/80">
      or,{' '}
      <Button
        variant="link"
        className="p-0 h-auto font-normal text-sm text-card-foreground/80 hover:text-primary hover:no-underline"
      >
        sign up
      </Button>
    </p>
  );
};

export default SecondaryText;
