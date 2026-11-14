import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import portrait from '../assets/DSC05793_1787215876015.JPG';
import roadBack from '../assets/DSC05826_1787215876016.JPG';
import mountainCross from '../assets/photo_10_2026-08-20_15-55-37_1787216157309.jpg';
import mountainLean from '../assets/photo_9_2026-08-20_15-55-37_1787216157309.jpg';
import couple from '../assets/photo_2026-05-11_15-19-21_1787216145022.jpg';
import sea from '../assets/photo_5_2026-08-20_15-52-48_1787216157313.jpg';
import sunset from '../assets/photo_3_2026-08-20_15-52-48_1787216157314.jpg';
import cockpit from '../assets/photo_3_2026-08-20_15-55-37_1787216157317.jpg';
import volunteerCard from '../assets/photo_2_2026-08-20_15-55-37_1787216157317.jpg';
import vacancyum from '../assets/image_1787216754250.png';
import piprescue from '../assets/image_1787216811999.png';
import interviewintel from '../assets/image_1787216834328.png';
import '@/styles-preview.css';

type VariantId = 1 | 2 | 3 | 4 | 5;

const variants: Array<{ id: VariantId; name: string; description: string }> = [
  { id: 1, name: 'Quiet editorial', description: 'A quiet light sheet: portrait, statement, and only the details that earn their place.' },
  { id: 2, name: 'Digital cockpit', description: 'A dark-blue personal interface where identity arrives as signals, readouts, and modules.' },
  { id: 3, name: 'Samui route', description: 'A sunny route through a life: geography first, then the work that grew from it.' },
  { id: 4, name: 'Photo essay', description: 'A cinematic image-led story with short captions and product work as visual artifacts.' },
  { id: 5, name: 'Playful archive', description: 'A bright personal index with bold type, living labels, and small moments of surprise.' },
];

function ChooseButton({ id, selected, onChoose }: { id: VariantId; selected: boolean; onChoose: (id: VariantId) => void }) {
  return <button type="button" onClick={() => onChoose(id)} data-testid={`button-choose-style-${id}`} className={`styles-panel__choose ${selected ? 'is-selected' : ''}`}>
    {selected ? 'Selected' : `Choose variant ${id}`} <span>{selected ? '✓' : '→'}</span>
  </button>;
}

function Chrome({ id, name, description }: { id: VariantId; name: string; description: string }) {
  return <div className="styles-panel__chrome">
    <div className="styles-panel__identity"><span className="styles-panel__number">{String(id).padStart(2, '0')}</span><span className="styles-panel__name">{name}</span></div>
    <p className="styles-panel__hypothesis">{description}</p>
  </div>;
}

function QuietEditorial({ selected, onChoose }: { selected: boolean; onChoose: (id: VariantId) => void }) {
  const variant = variants[0];
  return <section id="variant-1" className="styles-panel preview-one">
    <Chrome id={1} name={variant.name} description={variant.description} />
    <div className="preview-one__grid">
      <div>
        <p className="preview-eyebrow">Konstantin Vyazovov / Koh Samui</p>
        <h2 className="preview-one__title">A person<br />in <em>progress.</em></h2>
        <p className="preview-one__copy">Full-stack AI engineer, raised on an island. I turn curious fragments into things people can actually use.</p>
        <p className="preview-one__quote">“The future is not something you wait for. It is something you create.”</p>
        <div className="preview-one__meta preview-mono"><span>20 years</span><span>AI / product</span><span>01—05</span></div>
      </div>
      <figure className="preview-one__image"><img src={portrait} alt="Portrait of Konstantin in an elevator" /><figcaption className="preview-one__caption"><span className="preview-mono">01 / personal archive</span><p>Raised on Koh Samui.<br />Still watching closely.</p></figcaption></figure>
    </div>
    <ChooseButton id={1} selected={selected} onChoose={onChoose} />
  </section>;
}

function DigitalCockpit({ selected, onChoose }: { selected: boolean; onChoose: (id: VariantId) => void }) {
  const variant = variants[1];
  return <section id="variant-2" className="styles-panel preview-two">
    <Chrome id={2} name={variant.name} description={variant.description} />
    <div className="preview-two__layout">
      <div className="preview-two__hero">
        <p className="preview-eyebrow">KONSTANTIN / LIVE PROFILE / 2026</p>
        <h2>Built from<br /><span>real signals.</span></h2>
        <p>A full-stack AI engineer moving between product ideas, servers, service work, and the visual evidence in between.</p>
      </div>
      <div className="preview-two__readout">
        <div className="signal-card"><div className="signal-card__top preview-mono"><span>ORIGIN</span><span>13.41° N</span></div><div className="signal-card__value">Koh Samui, TH</div><div className="signal-card__bar signal-card__bar--blue"><i /></div></div>
        <div className="signal-card"><div className="signal-card__top preview-mono"><span>NOW BUILDING</span><span>ACTIVE</span></div><div className="signal-card__value">AI products</div><div className="signal-card__bar"><i /></div></div>
      </div>
      <div className="preview-two__modules">
        <div className="module"><span className="preview-mono">01 / STACK</span><strong>Python</strong><p>bots, automations, backends</p></div>
        <div className="module"><span className="preview-mono">02 / MEMORY</span><strong>GTA V RP</strong><p>systems learned from inside</p></div>
        <div className="module"><span className="preview-mono">03 / SIGNAL</span><strong>Nyx</strong><p>the quiet project after midnight</p></div>
      </div>
      <figure className="col-span-full mt-6 hidden h-44 overflow-hidden md:block"><img src={cockpit} alt="Aircraft cockpit controls" className="h-full w-full object-cover object-[center_60%] opacity-75" /></figure>
    </div>
    <ChooseButton id={2} selected={selected} onChoose={onChoose} />
  </section>;
}

function SamuiRoute({ selected, onChoose }: { selected: boolean; onChoose: (id: VariantId) => void }) {
  const variant = variants[2];
  const stops = [['2013', 'Thailand'], ['2019–22', 'Simulators'], ['2023', 'GTA V RP'], ['2024', 'Cafe'], ['2025', 'Nyx'], ['2026', 'Products']];
  return <section id="variant-3" className="styles-panel preview-three">
    <Chrome id={3} name={variant.name} description={variant.description} />
    <div className="preview-three__top">
      <div><p className="preview-eyebrow">A life in motion / island to interface</p><h2>Take the<br />long way.</h2></div>
      <p>From Thailand in 2013 to product development in 2026: not a straight line, a route with enough scenery to remember.</p>
    </div>
    <div className="preview-three__map">{stops.map(([year, title]) => <div className="route-stop" key={year}><span className="route-stop__dot" /><span className="route-stop__year">{year}</span><span className="route-stop__title">{title}</span></div>)}</div>
    <div className="preview-three__photo-row"><figure><img src={sea} alt="Konstantin by the turquoise sea" /></figure><figure><img src={roadBack} alt="Konstantin walking through Thailand" /></figure><figure><img src={mountainCross} alt="Konstantin in front of a mountain" /></figure></div>
    <div className="preview-three__footer preview-mono"><span>13.41° N / 100.50° E</span><span>next stop: something useful <ArrowUpRight size={14} /></span></div>
    <ChooseButton id={3} selected={selected} onChoose={onChoose} />
  </section>;
}

function PhotoEssay({ selected, onChoose }: { selected: boolean; onChoose: (id: VariantId) => void }) {
  const variant = variants[3];
  return <section id="variant-4" className="styles-panel preview-four">
    <div className="preview-four__image"><img src={mountainLean} alt="Konstantin beside a mountain road" /></div>
    <div className="preview-four__story"><p className="preview-eyebrow">04 / Photo essay / 2026</p><h2>The work<br />is in the<br />looking.</h2><p>People, systems, weather. A visual journal for the parts of building that never fit neatly into a portfolio.</p><div className="preview-four__caption"><span className="preview-mono">FIELD NOTE / 005</span><strong>First the island.<br />Then the interfaces.</strong></div><div className="preview-four__artifacts"><figure><img src={vacancyum} alt="Vacancyum product screenshot" /></figure><figure><img src={piprescue} alt="PipRescue product screenshot" /></figure><figure><img src={interviewintel} alt="InterviewIntel product screenshot" /></figure></div></div>
    <Chrome id={4} name={variant.name} description={variant.description} />
    <ChooseButton id={4} selected={selected} onChoose={onChoose} />
  </section>;
}

function PlayfulArchive({ selected, onChoose }: { selected: boolean; onChoose: (id: VariantId) => void }) {
  const variant = variants[4];
  const [index, setIndex] = useState(17);
  return <section id="variant-5" className="styles-panel preview-five">
    <Chrome id={5} name={variant.name} description={variant.description} />
    <div className="preview-five__masthead"><div><p className="preview-eyebrow">A personal index / not a CV</p><h2>FRAG<br /><em>MENT</em></h2></div><p className="preview-five__aside">The archive is allowed to have a personality. Sometimes it labels the wrong thing on purpose.</p></div>
    <div className="preview-five__body"><figure className="preview-five__image"><img src={couple} alt="Two people among rocks and trees" /><span className="preview-five__sticker">keep<br />looking</span></figure><div className="preview-five__text"><p className="preview-mono">ENTRY / {String(index).padStart(2, '0')}</p><h3>Soft evidence<br />of a working life.</h3><p>AI products, old servers, a cafe job, a volunteer badge, and the habit of taking a photograph before the moment moves on.</p><div className="preview-five__index preview-mono"><span>archive position</span><button type="button" onClick={() => setIndex((current) => current === 19 ? 1 : current + 1)} data-testid="button-move-archive-index">move the index →</button></div><div className="preview-five__tags"><span>people</span><span>places</span><span>systems</span><span>night work</span></div></div></div>
    <ChooseButton id={5} selected={selected} onChoose={onChoose} />
  </section>;
}

export default function StylesPage() {
  const initialVariant = Number(new URLSearchParams(window.location.search).get('variant'));
  const [selected, setSelected] = useState<VariantId | null>([1, 2, 3, 4, 5].includes(initialVariant) ? initialVariant as VariantId : null);
  const choose = (id: VariantId) => setSelected(id);
  const isFocused = [1, 2, 3, 4, 5].includes(initialVariant);
  return <main className="styles-page">
    <header className="styles-compare-header">
      <div className="styles-compare-header__row"><div><p className="styles-compare-header__eyebrow">FRAGMENT / design exploration</p><h1>Five ways to<br />tell the same story.</h1></div><p>Independent visual hypotheses for Konstantin Vyazovov’s personal archive. Compare the metaphor before choosing the interface.</p></div>
      <div className="styles-compare-header__rule" />
      <nav className="styles-compare-nav" aria-label="Style variants">{variants.map((variant) => <a key={variant.id} href={`/styles?variant=${variant.id}`} className={initialVariant === variant.id ? 'is-active' : ''} data-testid={`link-style-variant-${variant.id}`}>0{variant.id} / {variant.name}</a>)}<Link href="/" data-testid="link-back-to-site" className="ml-auto border-0 px-0 py-[10px] text-[#6e7b88] hover:bg-transparent hover:text-[#173b66]">Back to site <ArrowUpRight size={13} /></Link></nav>
    </header>
    <div className="styles-panels">
      {(!isFocused || initialVariant === 1) && <QuietEditorial selected={selected === 1} onChoose={choose} />}
      {(!isFocused || initialVariant === 2) && <DigitalCockpit selected={selected === 2} onChoose={choose} />}
      {(!isFocused || initialVariant === 3) && <SamuiRoute selected={selected === 3} onChoose={choose} />}
      {(!isFocused || initialVariant === 4) && <PhotoEssay selected={selected === 4} onChoose={choose} />}
      {(!isFocused || initialVariant === 5) && <PlayfulArchive selected={selected === 5} onChoose={choose} />}
    </div>
    {selected && <div className="fixed bottom-5 left-1/2 z-20 -translate-x-1/2 border border-[#173b66] bg-[#f7f8fa] px-4 py-3 font-mono-custom text-[10px] uppercase tracking-[.1em] text-[#173b66] shadow-[0_10px_30px_rgba(23,59,102,.15)]">Variant {selected} selected — share this route: /styles?variant={selected}</div>}
  </main>;
}