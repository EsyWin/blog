import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedTitle() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'dev',
        'sysadmin',
        'hacker',
        'trader',
        'miner',
        'writer',
        'ethics',
        'asset',
        'dev',
      ],
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: false,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <h1>
      self-taught
      {' '}
      <span ref={el} className="text-primary-focus" />
      {' '}
    </h1>
  );
}
