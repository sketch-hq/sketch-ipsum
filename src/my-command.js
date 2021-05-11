const sketch = require('sketch')
const { DataSupplier, UI } = sketch
const util = require('util')
import { Markov } from './markov'

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

const loremIpsumText = `Certe, inquam, pertinax non ero tibique, si mihi probabis ea, quae dices, libenter assentiar. Probabo, inquit, modo ista sis aequitate, quam ostendis. sed uti oratione perpetua malo quam interrogare aut interrogari. Ut placet, inquam. Tum dicere exorsus est. Primum igitur, inquit, sic agam, ut ipsi auctori huius disciplinae placet: constituam, quid et quale sit id, de quo quaerimus, non quo ignorare vos arbitrer, sed ut ratione et via procedat oratio. quaerimus igitur, quid sit extremum et ultimum bonorum, quod omnium philosophorum sententia tale debet esse, ut ad id omnia referri oporteat, ipsum autem nusquam. hoc Epicurus in voluptate ponit, quod summum bonum esse vult, summumque malum dolorem, idque instituit docere sic: Omne animal, simul atque natum sit, voluptatem appetere eaque gaudere ut summo bono, dolorem aspernari ut summum malum et, quantum possit, a se repellere, idque facere nondum depravatum ipsa natura incorrupte atque integre iudicante. itaque negat opus esse ratione neque disputatione, quam ob rem voluptas expetenda, fugiendus dolor sit. sentiri haec putat, ut calere ignem, nivem esse albam, dulce mel. quorum nihil oportere exquisitis rationibus confirmare, tantum satis esse admonere. interesse enim inter argumentum conclusionemque rationis et inter mediocrem animadversionem atque admonitionem. altera occulta quaedam et quasi involuta aperiri, altera prompta et aperta iudicari. etenim quoniam detractis de homine sensibus reliqui nihil est, necesse est, quid aut ad naturam aut contra sit, a natura ipsa iudicari. ea quid percipit aut quid iudicat, quo aut petat aut fugiat aliquid, praeter voluptatem et dolorem? Sunt autem quidam e nostris, qui haec subtilius velint tradere et negent satis esse, quid bonum sit aut quid malum, sensu iudicari, sed animo etiam ac ratione intellegi posse et voluptatem ipsam per se esse expetendam et dolorem ipsum per se esse fugiendum. itaque aiunt hanc quasi naturalem atque insitam in animis nostris inesse notionem, ut alterum esse appetendum, alterum aspernandum sentiamus. Alii autem, quibus ego assentior, cum a philosophis compluribus permulta dicantur, cur nec voluptas in bonis sit numeranda nec in malis dolor, non existimant oportere nimium nos causae confidere, sed et argumentandum et accurate disserendum et rationibus conquisitis de voluptate et dolore disputandum putant. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. et harum quidem rerum facilis est et expedita distinctio. nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

Hanc ego cum teneam sententiam, quid est cur verear, ne ad eam non possim accommodare Torquatos nostros? quos tu paulo ante cum memoriter, tum etiam erga nos amice et benivole collegisti, nec me tamen laudandis maioribus meis corrupisti nec segniorem ad respondendum reddidisti. quorum facta quem ad modum, quaeso, interpretaris? sicine eos censes aut in armatum hostem impetum fecisse aut in liberos atque in sanguinem suum tam crudelis fuisse, nihil ut de utilitatibus, nihil ut de commodis suis cogitarent? at id ne ferae quidem faciunt, ut ita ruant itaque turbent, ut earum motus et impetus quo pertineant non intellegamus, tu tam egregios viros censes tantas res gessisse sine causa? Quae fuerit causa, mox videro; interea hoc tenebo, si ob aliquam causam ista, quae sine dubio praeclara sunt, fecerint, virtutem iis per se ipsam causam non fuisse. Torquem detraxit hosti. Et quidem se texit, ne interiret. At magnum periculum adiit. In oculis quidem exercitus. Quid ex eo est consecutus? Laudem et caritatem, quae sunt vitae sine metu degendae praesidia firmissima. Filium morte multavit. Si sine causa, nollem me ab eo ortum, tam inportuno tamque crudeli; sin, ut dolore suo sanciret militaris imperii disciplinam exercitumque in gravissimo bello animadversionis metu contineret, saluti prospexit civium, qua intellegebat contineri suam. atque haec ratio late patet. In quo enim maxime consuevit iactare vestra se oratio, tua praesertim, qui studiose antiqua persequeris, claris et fortibus viris commemorandis eorumque factis non emolumento aliquo, sed ipsius honestatis decore laudandis, id totum evertitur eo delectu rerum, quem modo dixi, constituto, ut aut voluptates omittantur maiorum voluptatum adipiscendarum causa aut dolores suscipiantur maiorum dolorum effugiendorum gratia.`