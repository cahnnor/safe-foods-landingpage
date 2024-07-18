import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Effortless ordering for every dietary need
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Quickly track foods you&apos;ve ordered and filter them by your dietary needs. Gain insight into what works for you and your family.
        </Typography>
        <Link
          href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {`Get Started`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Safe Foods hero image"
          src="/hero2.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Quick orders, less stress
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Choose restaurants fast"
              description="Go straight to a list of restaurants that has food which meets your or your group's dietary needs."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Link to any delivery app"
              description="Set up links for your preferred delivery method and order seamlessly."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="For yourself, or the family"
              description="Track which foods you prefer and which needs they satisfy to filter later. Track as many people as you want."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            With you, wherever you go
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Make and record your orders on any device, any time.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Safe Foods hero image"
            src="/hero2.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Feedback
          </Typography>
          <div>Anything you want to let us know?</div>
          <Link
            href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Contact Us`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
