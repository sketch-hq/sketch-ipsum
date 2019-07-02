const sketch = require('sketch')
const { DataSupplier, UI } = sketch
const util = require('util')

export function onStartup () {
  DataSupplier.registerDataSupplier('public.text', 'Sketch Ipsum Short', 'SupplyDataShort')
  DataSupplier.registerDataSupplier('public.text', 'Sketch Ipsum Medium', 'SupplyDataMedium')
  DataSupplier.registerDataSupplier('public.text', 'Sketch Ipsum Long', 'SupplyDataLong')
}

export function onShutdown () {
  DataSupplier.deregisterDataSuppliers()
}

export function onSupplyDataShort (context) { supplyData(context, 'short') }
export function onSupplyDataMedium (context) { supplyData(context, 'medium') }
export function onSupplyDataLong (context) { supplyData(context, 'long') }

function supplyData(context, length) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    DataSupplier.supplyDataAtIndex(dataKey, getLoremIpsum(length), index)
  })
}

function getLoremIpsum(length) {
  let txt
  switch (length) {
  case 'short':
    txt = randomStringFromArray(shortContent)
    break
  case 'medium':
    txt = randomStringFromArray(mediumContent)
    break
  case 'long':
    txt = randomStringFromArray(longContent)
    break
  }
  return txt
}

function randomStringFromArray(array) {
  return array[Math.floor(Math.random() * array.length)]
}

const shortContent = [
  'Apparet statim, quae sint officia, quae actiones.',
  'Rhetorice igitur, inquam, nos mavis quam dialectice disputare?',
  'Illud dico, ea, quae dicat, praeclare inter se cohaerere.',
  'Ita graviter et severe voluptatem secrevit a bono.',
  'Idem iste, inquam, de voluptate quid sentit?',
  'Quod si ita se habeat, non possit beatam praestare vitam sapientia.',
  'Ut optime, secundum naturam affectum esse possit.',
  'Ne vitationem quidem doloris ipsam per se quisquam in rebus expetendis putavit, nisi etiam evitare posset.',
  'Sed quanta sit alias, nunc tantum possitne esse tanta.',
  'Fortitudinis quaedam praecepta sunt ac paene leges, quae effeminari virum vetant in dolore.'
]

const mediumContent = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Ratio enim nostra consentit, pugnat oratio. Immo videri fortasse. Quo plebiscito decreta a senatu est consuli quaestio Cn. Quibusnam praeteritis? In schola desinis. Verum hoc idem saepe faciamus.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnes enim iucundum motum, quo sensus hilaretur. Quis istud possit, inquit, negare? Duo Reges: constructio interrete. Venit ad extremum; Perge porro; Haec quo modo conveniant, non sane intellego.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin aliud quid voles, postea. Quamquam te quidem video minime esse deterritum. Hoc simile tandem est? Duo Reges: constructio interrete. Sed ego in hoc resisto; Quod ea non occurrentia fingunt, vincunt Aristonem;',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita fit cum gravior, tum etiam splendidior oratio. Sed haec nihil sane ad rem; Sed haec nihil sane ad rem; Ego vero isti, inquam, permitto. Quod cum dixissent, ille contra.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hic ambiguo ludimur. Istam voluptatem perpetuam quis potest praestare sapienti? Prodest, inquit, mihi eo esse animo. Stoicos roga. Cyrenaici quidem non recusant; A mene tu?',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negat enim summo bono afferre incrementum diem. Scrupulum, inquam, abeunti; Poterat autem inpune;',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velut ego nunc moveor. Quid de Platone aut de Democrito loquar? Minime vero, inquit ille, consentit. Quare ad ea primum, si videtur; Duo Reges: constructio interrete. Cur, nisi quod turpis oratio est?',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum essent dicta, discessimus. Sed ad illum redeo. Hoc Hieronymus summum bonum esse dixit. Sint modo partes vitae beatae. Peccata paria. Duo Reges: constructio interrete. Ubi ut eam caperet aut quando?',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nimis multa. Sed tu istuc dixti bene Latine, parum plane. Recte, inquit, intellegis. Deinde dolorem quem maximum? Haec quo modo conveniant, non sane intellego. Duo Reges: constructio interrete. Quid enim possumus hoc agere divinius? Num quid tale Democritus?',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo igitur esse beatus potest. Quaerimus enim finem bonorum. Videsne quam sit magna dissensio? Nos cum te, M. Duo Reges: constructio interrete.'
]

const longContent = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rationis enim perfectio est virtus; Si longus, levis dictata sunt. Nunc omni virtuti vitium contrario nomine opponitur. Inde igitur, inquit, ordiendum est. Hic nihil fuit, quod quaereremus. Negat esse eam, inquit, propter se expetendam. 

Velut ego nunc moveor. Duo Reges: constructio interrete. Si mala non sunt, iacet omnis ratio Peripateticorum. Hic ambiguo ludimur. Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Si verbum sequimur, primum longius verbum praepositum quam bonum. Haec dicuntur inconstantissime. 

Et ille ridens: Video, inquit, quid agas; Inde igitur, inquit, ordiendum est. Immo alio genere; Primum quid tu dicis breve?`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui convenit? Nihil opus est exemplis hoc facere longius. Duo Reges: constructio interrete. Deprehensus omnem poenam contemnet. Eaedem res maneant alio modo. 

Quid censes in Latino fore? Graccho, eius fere, aequalí? Quid de Pythagora? Aliter autem vobis placet. Dici enim nihil potest verius. 

Istam voluptatem, inquit, Epicurus ignorat? Neutrum vero, inquit ille. Hoc tu nunc in illo probas. Maximus dolor, inquit, brevis est.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, ut dicis, inquit; Istam voluptatem perpetuam quis potest praestare sapienti? Quam illa ardentis amores excitaret sui! Cur tandem? Est, ut dicis, inquam. Illa tamen simplicia, vestra versuta. Venit ad extremum; 

Duo Reges: constructio interrete. Quis hoc dicit? Quo modo autem philosophus loquitur? Cum audissem Antiochum, Brute, ut solebam, cum M. Num quid tale Democritus? Quis est tam dissimile homini. Restatis igitur vos; 

Quis istud possit, inquit, negare? Quis non odit sordidos, vanos, leves, futtiles? Sit enim idem caecus, debilis. Sed ea mala virtuti magnitudine obruebantur. Sed residamus, inquit, si placet.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum negas esse divitias, praeposìtum esse dicis? Tum mihi Piso: Quid ergo? Tum Quintus: Est plane, Piso, ut dicis, inquit. Itaque his sapiens semper vacabit. Duo Reges: constructio interrete. Memini vero, inquam; 

Quis istud possit, inquit, negare? Equidem, sed audistine modo de Carneade? Addidisti ad extremum etiam indoctum fuisse. Tuo vero id quidem, inquam, arbitratu. 

Stoicos roga. Tubulo putas dicere? Sed haec omittamus; Nihil illinc huc pervenit. Tecum optime, deinde etiam cum mediocri amico. Teneo, inquit, finem illi videri nihil dolere. At ille pellit, qui permulcet sensum voluptate.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non odit sordidos, vanos, leves, futtiles? Si longus, levis dictata sunt. Restatis igitur vos; Poterat autem inpune; 

Oratio me istius philosophi non offendit; Sed haec in pueris; Compensabatur, inquit, cum summis doloribus laetitia. Quippe: habes enim a rhetoribus; Aliter enim explicari, quod quaeritur, non potest. Urgent tamen et nihil remittunt. 

Videsne quam sit magna dissensio? Sit enim idem caecus, debilis. Duo Reges: constructio interrete. Quod non faceret, si in voluptate summum bonum poneret. Aliud igitur esse censet gaudere, aliud non dolere. Proclivi currit oratio. Minime vero istorum quidem, inquit.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequentia exquirere, quoad sit id, quod volumus, effectum. Non est igitur summum malum dolor. Duo Reges: constructio interrete. Itaque his sapiens semper vacabit. Summus dolor plures dies manere non potest? Torquatus, is qui consul cum Cn. 

Si qua in iis corrigere voluit, deteriora fecit. At ille pellit, qui permulcet sensum voluptate. Minime vero istorum quidem, inquit. Si quicquam extra virtutem habeatur in bonis. 

Cur haec eadem Democritus? Bonum patria: miserum exilium.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaedem res maneant alio modo. Sed haec nihil sane ad rem; Qualem igitur hominem natura inchoavit? Unum est sine dolore esse, alterum cum voluptate. Duo Reges: constructio interrete. Frater et T. 

Quo modo autem philosophus loquitur? Huius ego nunc auctoritatem sequens idem faciam. Quid de Pythagora? Quis istud, quaeso, nesciebat? Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; 

Nulla erit controversia. Quorum altera prosunt, nocent altera. Quae diligentissime contra Aristonem dicuntur a Chryippo. Est enim effectrix multarum et magnarum voluptatum.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc haec primum fortasse audientis servire debemus. Et nemo nimium beatus est; Tum mihi Piso: Quid ergo? Nihil illinc huc pervenit. Non autem hoc: igitur ne illud quidem. 

Duo Reges: constructio interrete. Sed quod proximum fuit non vidit. Audeo dicere, inquit. An tu me de L. Disserendi artem nullam habuit. Rationis enim perfectio est virtus; Nihil sane. 

Frater et T. At hoc in eo M. Erit enim mecum, si tecum erit. Hoc mihi cum tuo fratre convenit. Quam si explicavisset, non tam haesitaret. Reguli reiciendam; Facile est hoc cernere in primis puerorum aetatulis.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tamen intellego quid velit. Negat esse eam, inquit, propter se expetendam. Summus dolor plures dies manere non potest? Duo Reges: constructio interrete. Sit enim idem caecus, debilis. Ergo, inquit, tibi Q. Quod ea non occurrentia fingunt, vincunt Aristonem; 

Multoque hoc melius nos veriusque quam Stoici. Sic enim censent, oportunitatis esse beate vivere. Quare attende, quaeso. Traditur, inquit, ab Epicuro ratio neglegendi doloris. An tu me de L. 

Quae diligentissime contra Aristonem dicuntur a Chryippo. Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Igitur ne dolorem quidem. Sic enim censent, oportunitatis esse beate vivere. Falli igitur possumus.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Is es profecto tu. Quae cum dixisset paulumque institisset, Quid est? Bonum integritas corporis: misera debilitas. Duo Reges: constructio interrete. At multis se probavit. Si quae forte-possumus. 

Que Manilium, ab iisque M. Summus dolor plures dies manere non potest? Nos cum te, M. Murenam te accusante defenderem. 

Beatus sibi videtur esse moriens. Quippe: habes enim a rhetoribus; Nihilo beatiorem esse Metellum quam Regulum.`
]