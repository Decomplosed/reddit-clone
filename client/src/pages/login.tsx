import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Axios from 'axios';
import { useRouter } from 'next/router';

import InputGroup from '../components/InputGroup';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
}
