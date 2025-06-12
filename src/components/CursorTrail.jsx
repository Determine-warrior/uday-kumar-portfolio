import React, { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setTrails(prevTrails => {
        const updatedTrails = [...prevTrails, newTrail];
        // Keep only the last 10 trails
        return updatedTrails.slice(-10);
      });

      // Remove trail after animation
      setTimeout(() => {
        setTrails(prevTrails => prevTrails.filter(trail => trail.id !== newTrail.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 10,
            top: trail.y - 10,
            opacity: (index + 1) / trails.length,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;