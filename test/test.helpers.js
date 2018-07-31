import 'babel-polyfill';
import {
  expect,
} from 'chai';
import { helpers } from '../src';

describe('Helpers', () => {
  describe('priorityDispatch Helper', () => {
    describe('Split code without subDeterminate.', () => {
      it('Correctly splits priority.', () => {
        expect(helpers.priorityDispatch.split('32B').determinate).to.equal('B');
      });

      it('Correctly splits the protocol.', () => {
        expect(helpers.priorityDispatch.split('32B').protocol).to.equal('32');
      });

      it('Correctly splits the subDeterminate.', () => {
        expect(helpers.priorityDispatch.split('32B').subDeterminate).to.be.empty;
      });
    });

    describe('Split code with subDeterminate', () => {
      it('Correctly splits priority.', () => {
        expect(helpers.priorityDispatch.split('26A02').determinate).to.equal('A');
      });

      it('Correctly splits the protocol.', () => {
        expect(helpers.priorityDispatch.split('26A02').protocol).to.equal('26');
      });

      it('Correctly splits the subDeterminate.', () => {
        expect(helpers.priorityDispatch.split('26A02').subDeterminate).to.equal('02');
      });
    });

    describe('Split code with alphanumeric subDeterminate', () => {
      it('Correctly splits priority.', () => {
        expect(helpers.priorityDispatch.split('29D02l').determinate).to.equal('D');
      });

      it('Correctly splits the protocol.', () => {
        expect(helpers.priorityDispatch.split('29D02l').protocol).to.equal('29');
      });

      it('Correctly splits the subDeterminate.', () => {
        expect(helpers.priorityDispatch.split('29D02l').subDeterminate).to.equal('02l');
      });
    });
  });
});
