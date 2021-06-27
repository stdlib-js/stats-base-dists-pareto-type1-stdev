<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Standard Deviation

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Pareto (Type I)][pareto-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for a [Pareto (Type I)][pareto-distribution] random variable is

<!-- <equation class="equation" label="eq:pareto_type1_stdev" align="center" raw="\operatorname{SD}\left( X \right) = \begin{cases} \infty & \text{for }\alpha\in(0,2] \\ \sqrt{ \frac{\beta^2\alpha}{(\alpha-1)^2(\alpha-2)} } & \text{for }\alpha>2 \end{cases}" alt="Standard deviation for a Pareto (Type I) distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{SD}\left( X \right) = \begin{cases} \infty &amp; \text{for }\alpha\in(0,2] \\ \sqrt{ \frac{\beta^2\alpha}{(\alpha-1)^2(\alpha-2)} } &amp; \text{for }\alpha&gt;2 \end{cases}" data-equation="eq:pareto_type1_stdev">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/1d8cc6e20147732234a178b3b719239a5778842e/lib/node_modules/@stdlib/stats/base/dists/pareto-type1/stdev/docs/img/equation_pareto_type1_stdev.svg" alt="Standard deviation for a Pareto (Type I) distribution.">
    <br>
</div>

<!-- </equation> -->

where `α > 0` is the shape parameter and `β > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-pareto-type1-stdev
```

</section>

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats-base-dists-pareto-type1-stdev' );
```

#### stdev( alpha, beta )

Returns the [standard deviation][standard-deviation] of a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var v = stdev( 2.5, 1.0 );
// returns ~1.491

v = stdev( 4.0, 12.0 );
// returns ~5.657

v = stdev( 8.0, 2.0 );
// returns ~0.33
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = stdev( NaN, 2.0 );
// returns NaN

v = stdev( 2.0, NaN );
// returns NaN
```

If provided `0 < alpha <= 2`, the function returns `+Infinity`.

```javascript
var v = stdev( 0.5, 2.0 );
// returns Infinity

v = stdev( 1.5, 1.0 );
// returns Infinity
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var v = stdev( 0.0, 1.0 );
// returns NaN

v = stdev( -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var v = stdev( 1.0, 0.0 );
// returns NaN

v = stdev( 1.0, -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var stdev = require( '@stdlib/stats-base-dists-pareto-type1-stdev' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*10.0 ) + EPS;
    beta = ( randu()*10.0 ) + EPS;
    v = stdev( alpha, beta );
    console.log( 'α: %d, β: %d, Var(X;α,β): %d', alpha.toFixed( 4 ), beta.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-pareto-type1-stdev.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-pareto-type1-stdev

[test-image]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-stdev/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-stdev/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-pareto-type1-stdev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-pareto-type1-stdev?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-pareto-type1-stdev.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-pareto-type1-stdev/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-pareto-type1-stdev/main/LICENSE

[pareto-distribution]: https://en.wikipedia.org/wiki/Pareto_distribution

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
