
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatInterface from '@/components/ChatInterface';
import CollaborativePage from '@/components/CollaborativePage';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<ChatInterface />} />
        <Route path="/community" element={<CollaborativePage />} />
      </Routes>
    </div>
  );
};

export default Index;
