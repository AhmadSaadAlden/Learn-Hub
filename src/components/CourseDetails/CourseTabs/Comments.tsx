'use client'

import { FaStar, FaRegStar } from "react-icons/fa"

const Comments = () => {
  const comments = [
    {
      id: 1,
      user: {
        name: "John Doe",
        avatar: "/avatar1.jpg",
        verified: true
      },
      rating: 5,
      date: "2 days ago",
      comment: "Amazing course! The video content was very helpful and well explained. I learned a lot from this.",
      likes: 12,
      dislikes: 2
    },
    {
      id: 2,
      user: {
        name: "Sarah Smith",
        avatar: "/avatar2.jpg",
        verified: false
      },
      rating: 4,
      date: "1 week ago",
      comment: "Good content but some sections could be more detailed. Overall satisfied with the purchase.",
      likes: 8,
      dislikes: 1
    },
    {
      id: 3,
      user: {
        name: "Mike Johnson",
        avatar: "/avatar3.jpg",
        verified: true
      },
      rating: 5,
      date: "3 weeks ago",
      comment: "Excellent quality videos and great explanations. The instructor knows how to teach complex topics simply.",
      likes: 15,
      dislikes: 0
    }
  ]

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          star <= rating ? 
            <FaStar key={star} className="text-yellow-400 w-3 h-3" /> : 
            <FaRegStar key={star} className="text-gray-300 w-3 h-3" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white rounded-lg p-6">
          {/* User Info */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {comment.user.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h5 className="font-medium text-gray-900">{comment.user.name}</h5>
                  {comment.user.verified && (
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  {renderStars(comment.rating)}
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Text */}
          <p className="text-gray-700 mb-4">{comment.comment}</p>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
              <ThumbsUpIcon />
              <span>{comment.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
              <ThumbsDownIcon />
              <span>{comment.dislikes}</span>
            </button>
            <button className="text-gray-500 hover:text-gray-700 ml-auto">
              Reply
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

// Icons components
const ThumbsUpIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
  </svg>
)

const ThumbsDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v4a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m-7 0H5a2 2 0 01-2-2v-4a2 2 0 012-2h2.5" />
  </svg>
)

export default Comments