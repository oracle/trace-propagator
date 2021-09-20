import { constructPropagation } from '..';

describe('constructPropagation', () => {
  it('with traceId and spanId', () => {
    const traceId = 'abcdef';
    const spanId = 'fedcba';

    expect(constructPropagation({ traceId, spanId })).toEqual({
      traceparent: '00-abcdef-fedcba-01',
      'X-B3-TraceId': 'abcdef',
      'X-B3-SpanId': 'fedcba',
      'X-B3-Sampled': '1',
      'uber-trace-id': `abcdef:fedcba:0:01`
    });
  });

  it('with traceId and spanId, should spread correctly', () => {
    const traceId = 'abcdef';
    const spanId = 'fedcba';

    expect({
      Authentication: 'secret',
      ...constructPropagation({ traceId, spanId })
    }).toEqual({
      Authentication: 'secret',
      traceparent: '00-abcdef-fedcba-01',
      'X-B3-TraceId': 'abcdef',
      'X-B3-SpanId': 'fedcba',
      'X-B3-Sampled': '1',
      'uber-trace-id': `abcdef:fedcba:0:01`
    });
  });

  it('with only traceId', () => {
    const traceId = 'abcdef';
    const spanId = '';

    expect(constructPropagation({ traceId, spanId })).toEqual({});
  });

  it('with only spanId', () => {
    const traceId = '';
    const spanId = 'fedcba';

    expect(constructPropagation({ traceId, spanId })).toEqual({});
  });

  it('without traceId or spanId', () => {
    const traceId = '';
    const spanId = '';

    expect(constructPropagation({ traceId, spanId })).toEqual({});
    expect(constructPropagation(null)).toEqual({});
    expect(constructPropagation(undefined)).toEqual({});
  });
});
