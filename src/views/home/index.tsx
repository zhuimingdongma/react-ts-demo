import HomeCard from 'components/card/homeCard'
import React, { useEffect, useState } from 'react'
import { getUserMusicList } from './request'

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);
  useEffect(() => {
    let ignore = false;
    setBio(null);
    getUserMusicList(363901622).then(result => {
      console.log('result: ', result);
    });
    return () => {
      ignore = true;
    }
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
    </>
  );
}
