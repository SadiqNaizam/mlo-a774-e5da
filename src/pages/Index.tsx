import React from 'react';
import Card from '@/components/layout/Card';

/**
 * IndexPage serves as the main entry point for the login screen.
 * It provides a full-screen, centered layout for the login card.
 */
const IndexPage: React.FC = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-background font-sans">
      <Card />
    </main>
  );
};

export default IndexPage;
