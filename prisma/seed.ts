import tag from './seed/tag'
import topic from './seed/topic'
import user from './seed/user'
import words from './seed/words'

async function run() {
  await user()
  await tag()
  await topic()
  await words()
}

run()
