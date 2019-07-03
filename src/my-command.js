const sketch = require('sketch')
const { DataSupplier, UI } = sketch
const util = require('util')
const Markov = require('./markov')

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
    var m = new Markov(loremIpsumText, 10, 1)
    txt = m.generate()
    break
  case 'medium':
    var m = new Markov(loremIpsumText, 45, 1)
    txt = m.generate()
    break
  case 'long':
    var m = new Markov(loremIpsumText, 45, 1)
    txt = m.generate() + '\n' + m.generate() + '\n' + m.generate()
    break
  }
  return txt
}

const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Epicurus autem cum in prima commendatione voluptatem dixisset, si eam, quam Aristippus, idem tenere debuit ultimum bonorum, quod ille; Nam si beatus umquam fuisset, beatam vitam usque ad illum a Cyro extructum rogum pertulisset. Nunc omni virtuti vitium contrario nomine opponitur. Ex rebus enim timiditas, non ex vocabulis nascitur. Sed cum, quod honestum sit, id solum bonum esse dicamus, consentaneum tamen est fungi officio, cum id officium nec in bonis ponamus nec in malis. Duo Reges: constructio interrete. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit.

Quamquam haec quidem praeposita recte et reiecta dicere licebit. Hoc autem loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte natura per se esse expetenda. Omnibus enim artibus volumus attributam esse eam, quae communis appellatur prudentia, quam omnes, qui cuique artificio praesunt, debent habere. Cum autem negant ea quicquam ad beatam vitam pertinere, rursus naturam relinquunt. Sin laboramus, quis est, qui alienae modum statuat industriae? Hic ego: Etsi facit hic quidem, inquam, Piso, ut vides, ea, quae praecipis, tamen mihi grata hortatio tua est. Nisi autem rerum natura perspecta erit, nullo modo poterimus sensuum iudicia defendere. Cum audissem Antiochum, Brute, ut solebam, cum M. Expressa vero in iis aetatibus, quae iam confirmatae sunt. Uterque enim summo bono fruitur, id est voluptate. Quorum sine causa fieri nihil putandum est. Quantum Aristoxeni ingenium consumptum videmus in musicis?

Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Satis est tibi in te, satis in legibus, satis in mediocribus amicitiis praesidii. Res enim se praeclare habebat, et quidem in utraque parte. Indicant pueri, in quibus ut in speculis natura cernitur. Piso, familiaris noster, et alia multa et hoc loco Stoicos irridebat: Quid enim? Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Ratio quidem vestra sic cogit. Qui igitur convenit ab alia voluptate dicere naturam proficisci, in alia summum bonum ponere?

Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Et quidem Arcesilas tuus, etsi fuit in disserendo pertinacior, tamen noster fuit; Quos qui tollunt et nihil posse percipi dicunt, ii remotis sensibus ne id ipsum quidem expedire possunt, quod disserunt. Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum abducas licebit. Conclusum est enim contra Cyrenaicos satis acute, nihil ad Epicurum. Nisi autem rerum natura perspecta erit, nullo modo poterimus sensuum iudicia defendere.

Haec non erant eius, qui innumerabilis mundos infinitasque regiones, quarum nulla esset ora, nulla extremitas, mente peragravisset. Ut placet, inquit, etsi enim illud erat aptius, aequum cuique concedere. Quae cum ita sint, effectum est nihil esse malum, quod turpe non sit. Sed tamen est aliquid, quod nobis non liceat, liceat illis. Ut pulsi recurrant? Praeclare Laelius, et recte sofñw, illudque vere: O Publi, o gurges, Galloni! es [redacted] miser, inquit. Quod mihi quidem visus est, cum sciret, velle tamen confitentem audire Torquatum. Si sapiens, ne tum quidem miser, cum ab Oroete, praetore Darei, in crucem actus est.

Praeclare enim Plato: Beatum, cui etiam in senectute contigerit, ut sapientiam verasque opiniones assequi possit. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. Itaque et manendi in vita et migrandi ratio omnis iis rebus, quas supra dixi, metienda. Atque his de rebus et splendida est eorum et illustris oratio. Terram, mihi crede, ea lanx et maria deprimet. Sed emolumenta communia esse dicuntur, recte autem facta et peccata non habentur communia. Atque omnia quidem scire, cuiuscumque modi sint, cupere curiosorum, duci vero maiorum rerum contemplatione ad cupiditatem scientiae summorum virorum est putandum. Sed non sunt in eo genere tantae commoditates corporis tamque productae temporibus tamque multae. Me ipsum esse dicerem, inquam, nisi mihi viderer habere bene cognitam voluptatem et satis firme conceptam animo atque comprehensam. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Quis, quaeso, illum negat et bonum virum et comem et humanum fuisse? Quia voluptatem hanc esse sentiunt omnes, quam sensus accipiens movetur et iucunditate quadam perfunditur.`