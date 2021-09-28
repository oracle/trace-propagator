# Trace Propagator

<img src="https://img.shields.io/npm/v/@oracle/trace-propagator.svg?color=informational" alt="trace-propagator"/>

This utility will construct the various trace propagation formats. All you need to do is give it a valid `traceId` and `spanId`.

## Installation

Install the package:

```shell
npm i --save @oracle/trace-propagator
```

## Examples
To use it in your code:

```js
import { constructPropagation } from '@oracle/trace-propagator';

let promise = fetch(url, {
  headers: constructPropagation({ traceId, spanId })
});
```

Or if you have your own headers already, such as auth:

```js
import { constructPropagation } from '@oracle/trace-propagator';

let promise = fetch(url, {
  headers: {
    Authentication: 'secret',
    ...constructPropagation({ traceId, spanId })
  }
});
```

## Help

Open a [GitHub issue](https://github.com/oracle/trace-propagator/issues) for bug reports, questions, or requests for enhancements.

## Contributing

This project welcomes contributions from the community. Before submitting a pull
request, please [review our contribution guide](./CONTRIBUTING.md).

## Security

Please consult the [security guide](./SECURITY.md) for our responsible security
vulnerability disclosure process.

## License

Copyright (c) 2021 Oracle and/or its affiliates.
Released under the Universal Permissive License v1.0 as shown at
<https://oss.oracle.com/licenses/upl/>.
