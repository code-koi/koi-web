import React from 'react';
import Card from '../components/ui/Card';

const dummyReview = [
  { title: '제목1', sub: '#Spring #JAVA', nickname: 'sdcodebase' },
  { title: '제목2', sub: '#Vue', nickname: 'yuntae' },
];

const dummyMentor = [
  { title: '제목1', sub: '#Spring #JAVA', nickname: 'sdcodebase' },
  { title: '제목2', sub: '#Vue', nickname: 'yuntae' },
];

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="my-20">
        <h3 className="mb-5 font-bold">CodeKoi</h3>
        <p className="font-semibold">코드 코이란 어쩌구 저쩌구</p>
      </div>
      <div className="my-20">
        <h3 className="mb-5 font-bold">코드리뷰</h3>
        <div className="flex gap-16">
          {dummyReview.map((item) => (
            <Card {...item} />
          ))}
        </div>
      </div>
      <div className="my-20">
        <h3 className="mb-5 font-bold">멘토</h3>
        <div className="flex gap-16">
          {dummyMentor.map((item) => (
            <Card {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
