/**
 * @license
 * Copyright © 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 */

/**
 * Creates a map of request headers for propagating traces through various formats
 *
 * @param Object containing a string traceId and string spanId
 */
export function constructPropagation(trace: { traceId: string; spanId: string }): Record<string, string> {
  if (trace && trace.traceId && trace.spanId) {
    return {
      // This enables W3C trace propagation
      traceparent: `00-${trace.traceId}-${trace.spanId}-01`,
      // these are tracing headers to support zipkin propagation,
      // see https://github.com/openzipkin/b3-propagation
      'X-B3-TraceId': trace.traceId,
      'X-B3-SpanId': trace.spanId,
      'X-B3-Sampled': '1',
      // https://eng.uber.com/distributed-tracing/
      'uber-trace-id': `${trace.traceId}:${trace.spanId}:0:01`
    };
  }
  return {};
}
