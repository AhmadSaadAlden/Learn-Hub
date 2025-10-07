'use client'

import { FaStar, FaRegStar } from "react-icons/fa"

const Rate = () => {
    const overallRating = 4.5
    const totalReviews = 128
    const ratingDistribution = [
        { stars: 5, count: 80, percentage: 62 },
        { stars: 4, count: 32, percentage: 25 },
        { stars: 3, count: 12, percentage: 9 },
        { stars: 2, count: 3, percentage: 2 },
        { stars: 1, count: 1, percentage: 1 }
    ]

    const renderStars = (rating: number) => {
        return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
            star <= rating ? 
                <FaStar key={star} className="text-yellow-400 w-4 h-4" /> : 
                <FaRegStar key={star} className="text-gray-300 w-4 h-4" />
            ))}
        </div>
        )
    }

    return (
        <div className="bg-white rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Overall Rating */}
                <div className="flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold text-gray-900">{overallRating}</div>
                    <div className="mt-2">
                        {renderStars(overallRating)}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                        {totalReviews} Reviews
                    </div>
                </div>

                {/* Rating Distribution */}
                <div className="flex-1 space-y-3">
                    {ratingDistribution.map((item) => (
                        <div key={item.stars} className="flex items-center gap-3">
                            <div className="flex items-center gap-1 w-16">
                                <span className="text-sm text-gray-600">{item.stars}</span>
                                <FaStar className="text-yellow-400 w-3 h-3" />
                            </div>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div 
                                    className="bg-yellow-400 h-2 rounded-full" 
                                    style={{ width: `${item.percentage}%` }}
                                />
                            </div>
                            <div className="text-sm text-gray-600 w-8">
                                {item.count}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Rate