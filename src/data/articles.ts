export interface ArticleStep {
  stepTitle: string;
  stepAccent: string;
  paragraphs: string[];
  visualImage: string;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  quoteImage: string;
  featuredImage: string;
  summary: string;
  featuredQuote: string;
  accentColor: string;
  steps: [ArticleStep, ArticleStep, ArticleStep];
}

export const ARTICLES: Article[] = [
  {
    slug: 'always-grateful-mindset',
    title: 'Always Grateful',
    category: 'Mindset & Gratitude',
    readTime: '4 min read',
    quoteImage: '/images/pinterest/download.jpg',
    featuredImage: '/images/features-articles/rise-above.jpg',
    summary:
      'Gratitude is not a passive reaction to good fortune—it is an active discipline of attention. When you train your mind to notice abundance in ordinary moments, your entire nervous system shifts from scarcity to sufficiency.',
    featuredQuote:
      'What you appreciate appreciates. Train your eyes to see the quiet wealth already present in your day.',
    accentColor: '#fee897',
    steps: [
      {
        stepTitle: 'The Scarcity Loop vs.',
        stepAccent: 'Intentional Notice',
        paragraphs: [
          'Most of us wake up and immediately audit what is missing: the hours we did not sleep, the tasks still unfinished, the milestones still out of reach. This default mental scan wires the brain to operate in a perpetual state of subtle deficit.',
          'Shifting into an Always Grateful mindset does not mean ignoring ambition or pretending challenges do not exist. Instead, it means anchoring your baseline awareness in what is already working before you step into the demands of the day.',
          'When you begin from sufficiency rather than lack, your decisions become calmer, clearer, and far less reactive.'
        ],
        visualImage: '/images/pinterest/download.jpg'
      },
      {
        stepTitle: 'The Three-Breath',
        stepAccent: 'Morning Anchor',
        paragraphs: [
          'Before reaching for your phone each morning, place both feet on the floor and take three deliberate breaths. On the first breath, acknowledge your body and the simple fact of waking up.',
          'On the second breath, bring to mind one person or relationship that adds warmth to your life. On the third breath, name one specific opportunity inside today’s schedule—even a small one—that your past self once wished for.',
          'This sixty-second ritual interrupts automatic stress loops and primes your reticular activating system to spot supportive moments all day long.'
        ],
        visualImage: '/images/pinterest/Be%20gentle%20with%20Yourself.jpg'
      },
      {
        stepTitle: 'Turning Obstacles into',
        stepAccent: 'Perspective',
        paragraphs: [
          'True gratitude proves its strength on difficult days. When plans stall or pressure rises, ask yourself a single reframing question: "What is this moment teaching me about patience, boundaries, or focus?"',
          'By pairing realistic acceptance with gratitude for your capacity to grow, every friction point becomes training material rather than a personal setback.',
          'End your evening by writing down three tiny wins from the day. Over weeks, this record becomes undeniable proof of a rich, evolving life.'
        ],
        visualImage: '/images/pinterest/download%20(5).jpg'
      }
    ]
  },
  {
    slug: 'money-clarity-routines',
    title: 'Stop Wishing, Start Doing',
    category: 'Money & Action',
    readTime: '5 min read',
    quoteImage: '/images/pinterest/download%20(2).jpg',
    featuredImage: '/images/features-articles/dream-big.jpg',
    summary:
      'Financial and personal freedom rarely come from a sudden windfall; they come from replacing passive wishing with decisive daily execution. Build a calm, weekly ritual that turns intention into measurable momentum.',
    featuredQuote:
      'Stop wishing, start doing. Clarity and abundance flow toward those who respect their daily habits.',
    accentColor: '#0038ff',
    steps: [
      {
        stepTitle: 'Replacing Avoidance with',
        stepAccent: 'Decisive Action',
        paragraphs: [
          'Anxiety thrives in ambiguity. When we avoid checking balances, tracking commitments, or reviewing where our time and money go, our imagination fills the blank space with worst-case scenarios.',
          'The first rule of clarity is separating your current metrics from your self-worth. Numbers on a screen are simply feedback data—they tell you where your energy and attention have flowed in the past month.',
          'Approach your goals like a calm architect: zero shame, zero panic, only clear-eyed execution.'
        ],
        visualImage: '/images/pinterest/download%20(2).jpg'
      },
      {
        stepTitle: 'The Fifteen-Minute',
        stepAccent: 'Sunday Reset',
        paragraphs: [
          'Consistency beats complexity in wealth and life. Set aside fifteen quiet minutes every Sunday morning with a warm cup of coffee to review three simple metrics: what came in, what went out, and what moved toward your future.',
          'Categorize recent spending and hours into two honest buckets: investments that genuinely nourished your life, health, or craft, and impulse leaks triggered by boredom or social comparison.',
          'Automate your core transfers—savings, investments, and deep work blocks—so willpower is never required to pay your future self first.'
        ],
        visualImage: '/images/pinterest/download%20(3).jpg'
      },
      {
        stepTitle: 'Defining Your Personal',
        stepAccent: 'Enough',
        paragraphs: [
          'Without a clear definition of "enough," the goalpost of success moves forever outward. Take time to define what an abundant Tuesday actually looks like for you: the pace of your morning, the work you choose, the people you share meals with.',
          'When you align your resources with your deepest personal values rather than external status signals, you unlock immediate breathing room.',
          'True wealth is not just the accumulation of assets—it is the freedom to own your time and keep your mind unhurried.'
        ],
        visualImage: '/images/pinterest/download%20(4).jpg'
      }
    ]
  },
  {
    slug: 'hold-the-vision',
    title: 'Quiet Discipline',
    category: 'Life & Purpose',
    readTime: '4 min read',
    quoteImage: '/images/pinterest/download%20(3).jpg',
    featuredImage: '/images/features-articles/thelibrary.jpg',
    summary:
      'Between planting a seed and seeing the harvest lies a quiet season where nothing seems to happen on the surface. Learn how self-discipline carries your vision when visible results are still compounding underground.',
    featuredQuote:
      'Hold the vision, trust the discipline. The quiet work you repeat when nobody is watching builds the life everyone admires.',
    accentColor: '#ec3b26',
    steps: [
      {
        stepTitle: 'Respecting the Invisible',
        stepAccent: 'Root Season',
        paragraphs: [
          'Every meaningful transformation—in health, career, finances, or emotional maturity—has a lag phase. You put in weeks of disciplined effort while external metrics barely budge.',
          'Most people abandon their habits inside this valley of disappointment because they mistake silent root growth for failure.',
          'When you understand that compounding is always slow before it is sudden, you stop demanding instant applause from a long-term vision.'
        ],
        visualImage: '/images/pinterest/download%20(3).jpg'
      },
      {
        stepTitle: 'Detaching from Timelines,',
        stepAccent: 'Committing to Standards',
        paragraphs: [
          'You cannot always control when a breakthrough arrives, how fast an audience grows, or when a market turns. You have complete authority, however, over the standard you bring to today’s repetition.',
          'Shift your pride from outcome goals to identity habits: instead of obsessing over the finish line, take satisfaction in being someone who never misses their daily craft block, workout, or reflection.',
          'When your daily standard is non-negotiable, time converts from an enemy into your greatest ally.'
        ],
        visualImage: '/images/pinterest/download%20(4).jpg'
      },
      {
        stepTitle: 'Visual Reminders that',
        stepAccent: 'Protect Your Focus',
        paragraphs: [
          'Our environment constantly pulls us toward short-term distraction. Surrounding your workspace and digital screens with intentional visual reminders keeps your higher vision top of mind.',
          'Revisit your core goals each morning not with frantic urgency, but with calm certainty—as a blueprint currently under construction.',
          'Keep showing up with quiet elegance. Brick by brick, the life you envisioned becomes the life you inhabit.'
        ],
        visualImage: '/images/pinterest/download%20(2).jpg'
      }
    ]
  },
  {
    slug: 'morning-mood-reset',
    title: 'Be Gentle With Yourself',
    category: 'Mood & Energy',
    readTime: '3 min read',
    quoteImage: '/images/pinterest/Be%20gentle%20with%20Yourself.jpg',
    featuredImage: '/images/features-articles/curiosity.jpg',
    summary:
      'Self-compassion is not self-indulgence—it is the fastest way to regulate an overwhelmed nervous system. Discover how releasing harsh inner criticism restores your energy, creativity, and emotional balance.',
    featuredQuote:
      'Be gentle with yourself. You are navigating chapters your past self only dreamed of reaching.',
    accentColor: '#1d4ed8',
    steps: [
      {
        stepTitle: 'First Light Before',
        stepAccent: 'Digital Noise',
        paragraphs: [
          'Scrolling through notifications from bed floods an awakening brain with other people’s emergencies, comparisons, and dopamine hooks before your own thoughts have even formed.',
          'Give yourself a twenty-minute buffer between waking up and looking at a screen. Open the curtains, let natural daylight hit your eyes, and speak to yourself like someone you genuinely care for.',
          'This simple cue synchronizes your circadian rhythm, steadies morning cortisol, and creates a spacious boundary around your mood.'
        ],
        visualImage: '/images/pinterest/Be%20gentle%20with%20Yourself.jpg'
      },
      {
        stepTitle: 'Stepping Out of',
        stepAccent: 'Unnecessary Stress',
        paragraphs: [
          'Not every urgent demand deserves your nervous system’s peace. Much of our daily exhaustion comes from carrying imaginary pressure and over-identifying with temporary friction.',
          'Follow tension with three minutes of unhurried breathing—rolling your shoulders, unclenching your jaw, and lengthening your exhale. Physical tension and mental tension are two sides of the same coin.',
          'Moving your body gently signals to your brain that you are safe, grounded, and in command of your pace.'
        ],
        visualImage: '/images/pinterest/download%20(1).jpg'
      },
      {
        stepTitle: 'Choosing Your Single',
        stepAccent: 'Emotional Intention',
        paragraphs: [
          'Most to-do lists only track what we need to do, never how we want to feel while doing it. Alongside your top task for the day, choose one emotional anchor word: Steady, Curious, Gentle, or Unrushed.',
          'Whenever midday friction tries to pull you out of alignment, return to that single word like a compass.',
          'A regulated mood is not the absence of busy hours—it is the presence of an anchored center inside them.'
        ],
        visualImage: '/images/pinterest/download.jpg'
      }
    ]
  },
  {
    slug: 'deep-focus-rituals',
    title: 'What You Repeat',
    category: 'Daily Habits',
    readTime: '5 min read',
    quoteImage: '/images/pinterest/download%20(4).jpg',
    featuredImage: '/images/features-articles/rise-above.jpg',
    summary:
      'Identity is not built in rare bursts of motivation—you become what you repeat every ordinary day. Design sensory rituals and environment cues that make excellence your default automatic behavior.',
    featuredQuote:
      'You become what you repeat. Guard your daily rituals like your most valuable currency—because they shape who you are.',
    accentColor: '#991b1b',
    steps: [
      {
        stepTitle: 'Eliminating Attention',
        stepAccent: 'Residue',
        paragraphs: [
          'Every time you glance at a message or switch browser tabs "just for a second," a fragment of your cognitive bandwidth remains stuck on the previous context—a phenomenon researchers call attention residue.',
          'True depth requires single-tasking architecture. Before starting an important creative or strategic block, close every unrelated tab and place your phone in another room.',
          'When your mind realizes there is no escape hatch into distraction, it settles into the work with surprising calm.'
        ],
        visualImage: '/images/pinterest/download%20(4).jpg'
      },
      {
        stepTitle: 'Rituals That Replace',
        stepAccent: 'Willpower',
        paragraphs: [
          'Rather than waiting for motivation to strike, train your brain to associate specific sensory cues with deep concentration. Clear your desk surface so only your current task remains in view.',
          'Pair your focus block with a dedicated instrumental playlist, a specific warm beverage, and a ninety-minute timer. Over days of repetition, this ritual acts as an automatic on-ramp into flow state.',
          'You stop negotiating with procrastination because repetition makes starting frictionless.'
        ],
        visualImage: '/images/pinterest/download%20(3).jpg'
      },
      {
        stepTitle: 'Deliberate Rest &',
        stepAccent: 'Mental Recovery',
        paragraphs: [
          'Elite focus is rhythmic, not endless. After ninety minutes of high-cognitive effort, step away from screens completely for ten to fifteen minutes.',
          'Walk without headphones, look at a distant horizon, or tidy a small space. Letting your default mode network wander consolidates insights and prevents afternoon burnout.',
          'Two protected hours of deep, intentional creation will always outperform ten hours of fractured busyness.'
        ],
        visualImage: '/images/pinterest/download%20(1).jpg'
      }
    ]
  },
  {
    slug: 'emotional-resilience',
    title: 'Faith Over Fear',
    category: 'Mindset & Stoicism',
    readTime: '4 min read',
    quoteImage: '/images/pinterest/download%20(5).jpg',
    featuredImage: '/images/features-articles/dream-big.jpg',
    summary:
      'Fear and faith both ask you to believe in something you cannot yet see. Learn how to master the space between an external trigger and your internal response so you can move forward with calm conviction.',
    featuredQuote:
      'Choose faith over fear. Peace belongs to those who trust their capacity to handle whatever comes next.',
    accentColor: '#1f4e29',
    steps: [
      {
        stepTitle: 'Widening the Space',
        stepAccent: 'Before Reaction',
        paragraphs: [
          'Between every unexpected challenge—a sharp email, a delayed plan, a sudden uncertainty—and your reaction lies a brief, decisive pause. Most regret is born from collapsing that pause to zero.',
          'When you feel a surge of fear or urgency, practice pausing for four slow seconds before speaking or acting. Name the emotion neutrally: "I notice tightness and uncertainty right now."',
          'Simply observing a feeling without immediately obeying it restores executive control and protects your peace.'
        ],
        visualImage: '/images/pinterest/download%20(5).jpg'
      },
      {
        stepTitle: 'The Clean Circle of',
        stepAccent: 'Control',
        paragraphs: [
          'Mental exhaustion happens when we pour ninety percent of our energy into things outside our control—other people’s perceptions, past mistakes, or hypothetical future outcomes.',
          'Draw a clean line down a page. On the left, write what depends entirely on your actions today: your preparation, your honesty, your kindness, your effort. Let everything on the right side go.',
          'Reclaiming energy from fear gives you extraordinary power over what you can actually build.'
        ],
        visualImage: '/images/pinterest/download%20(2).jpg'
      },
      {
        stepTitle: 'Soft Shoulders,',
        stepAccent: 'Strong Spine',
        paragraphs: [
          'True resilience is never brittle or defensive. Like bamboo in a storm, it combines strong core values with flexible adaptation to reality as it is.',
          'Remind yourself daily that you have already navigated every difficult season of your life so far—and grown wiser through each one.',
          'Carry your standards with a strong spine, and meet the unpredictability of life with soft, unhurried shoulders.'
        ],
        visualImage: '/images/pinterest/Be%20gentle%20with%20Yourself.jpg'
      }
    ]
  }
];

export function getArticleBySlug(slug: string): Article {
  const normalized = slug.trim().toLowerCase();
  return ARTICLES.find((a) => a.slug.toLowerCase() === normalized) ?? ARTICLES[0];
}
