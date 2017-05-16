import ulog from 'ulog'
import { expect } from 'chai'

import { Entity } from './'

const log = ulog('jspa:spec')
log.log(log.name)

describe('jspa', function(){
	describe('Entity', function(){
		it('is a function', function(){
			expect(Entity).to.be.a('function')
		})
	})
})