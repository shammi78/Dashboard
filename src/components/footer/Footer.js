import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className='dashboard-footer'>
        <div className='row'>
            <div className='col-xl'>
                <p>© 2022 Developer UI. All Rights Reserved.</p>
            </div>
            <div className='col-xl-auto'>
                <ul className='d-flex flex-wrap align-items-center'>
                    <li>
                        <Link href="#">Marketplace</Link>
                    </li>
                    <li>
                        <Link href="#">License</Link>
                    </li>
                    <li>
                        <Link href="#">Terms of Use</Link>
                    </li>
                    <li>
                        <Link href="#">Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
      </footer>
    </>
  )
}
