const hl = require('../index')();

hl.log({
    foo: 'bar',
    bar: 'baz',
    hei: 3,
});
hl.error({
    foo: 'bar',
    bar: 'baz',
    hei: 3,
});
hl.warn([{
    foo: 'bar',
    bar: 'baz',
    hei: 3,
},
{
    foo: 'bar',
    bar: 'baz',
    hei: 3,
}]);
