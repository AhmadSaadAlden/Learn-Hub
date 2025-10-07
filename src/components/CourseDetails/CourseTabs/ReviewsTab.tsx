'use client'

import { Pagination } from "@/components/Pagination/Pagination"
import Rate from "./Rate"
import Comments from "./Comments"


const ReviewsTab = () => {
  return (
    <div className="space-y-5">
      <h4 className="font-semibold text-base md:text-[20px] text-black">comments</h4>
      <Rate />
      <Comments />
      <Pagination />
    </div>
  )
}

export default ReviewsTab