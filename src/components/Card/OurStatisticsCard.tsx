/* 'use client'
interface OurStatisticsCardType {
    total: number
    title: string
}

interface OurStatisticsCardProps {
    card: OurStatisticsCardType
}

export const OurStatisticsCard = ({card}: OurStatisticsCardProps) => {
    return (
        <div className="w-full min-h[160px] bg-[var(--OurStatistics-bg)] rounded-[20px] flex flex-col justify-center items-center gap-4">
            <h2 className="font-semibold text-2xl md:text-[32px] text-[var(--OurStatistics-number)]">{card.total}</h2>
            <p className="jost font-medium text-base md:text-lg text-[var(--OurStatistics-title)]">{card.title}</p>
        </div>
    )
}
 */

'use client'

interface OurStatisticsCardType {
  total: number
  title: string
}

interface OurStatisticsCardProps {
  card: OurStatisticsCardType
}

export const OurStatisticsCard = ({ card }: OurStatisticsCardProps) => {
  return (
    <div className="w-full min-h-[160px] bg-[var(--OurStatistics-bg)] rounded-[20px] flex flex-col justify-center items-center gap-4 p-4">
      <h2 className="font-semibold text-2xl md:text-[32px] text-[var(--OurStatistics-number)]">
        {card.total}
      </h2>
      <p className="jost font-medium text-base md:text-lg text-[var(--OurStatistics-title)]">
        {card.title}
      </p>
    </div>
  )
}
