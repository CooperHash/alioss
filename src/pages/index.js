"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
//import { useLocalStorageState } from 'ahooks';


export default function Home() {
  const router = useRouter();
  const [accessKeyId, setAccessKeyId] = useState(null)
  useEffect(() => {
    const ak = localStorage.getItem("accessKeyId")
    // 可以添加其他相关的 key 检查
    if (ak) {
      console.log(ak);
      setAccessKeyId(ak)
      // 如果 accessKey 存在，跳转到 page2
      router.push('/AliHome');
    }
  }, [router]);

  if (accessKeyId) {
    return (
      <div>
        Loading ...
      </div>
    )
  } else {
    return (
      <ConfigPage/>
    )
  }

}

function ConfigPage() {
  const [region, setRegion] = useState('');
  const [accessKeyId, setAccessKeyId] = useState('');
  const [accessKeySecret, setAccessKeySecret] = useState('');
  const [bucket, setBucket] = useState('');

  const saveToLocalStorage = () => {
    if (region && accessKeyId && accessKeySecret && bucket) {
      localStorage.setItem('region', region);
      localStorage.setItem('accessKeyId', accessKeyId);
      localStorage.setItem('accessKeySecret', accessKeySecret);
      localStorage.setItem('bucket', bucket);
      alert('Data saved to localStorage!');
    } else {
      alert('Please fill all the fields!');
    }
  }

  return (
    <div className="w-screen h-screen bg-slate-200 flex items-center">
      <div className="flex flex-col space-y-8 mx-auto font-light">
        <input
          placeholder="region"
          className="w-[300px] h-[45px] text-xl"
          value={region}
          onChange={e => setRegion(e.target.value)}
        />
        <input
          placeholder="accessKeyId"
          className="w-[300px] h-[45px] text-xl"
          value={accessKeyId}
          onChange={e => setAccessKeyId(e.target.value)}
        />
        <input
          placeholder="accessKeySecret"
          className="w-[300px] h-[45px] text-xl"
          value={accessKeySecret}
          onChange={e => setAccessKeySecret(e.target.value)}
        />
        <input
          placeholder="bucket"
          className="w-[300px] h-[45px] text-xl"
          value={bucket}
          onChange={e => setBucket(e.target.value)}
        />
        <button
          onClick={saveToLocalStorage}
          className="w-[300px] h-[45px] bg-blue-500 text-white text-xl"
        >
          Save to localStorage
        </button>
      </div>
    </div>
  )
}
