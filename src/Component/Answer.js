import React from 'react'
function Answer({data,id}) {

  return<>
  <div className='whole'>
   <div className='long'>
    <p>LongUrl:</p>
    <a className='long-sub'target={'_blank'} href={data.LongUrl}>{data.LongUrl}</a>
    </div>
  <div className='short'>
    <p>ShortUrl:</p>
  <a className='short-sub'target={'_blank'} href={data.LongUrl}>{data.ShortUrl}</a>
  </div></div>
  </>
}

export default Answer