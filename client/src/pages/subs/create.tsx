import Head from 'next/head';
import { useState } from 'react';

export default function Create() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [error, setError] = useState<Partial<any>>({});

  return <div></div>;
}
