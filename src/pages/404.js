import { useEffect } from 'react';
import { navigate } from "@reach/router"

export default function NotFound() {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
};