import classNames from 'shared/lib/classNames/classNames';

describe('classnames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional classes', () => {
        const expected = 'someClass class1 class2 class3';
        expect(classNames('someClass', {}, ['class1', 'class2', 'class3']))
            .toBe(expected);
    });
    test('with empty string', () => {
        expect(classNames('')).toBe('');
    });
    test('with mods where every mod is true', () => {
        const expected = 'someClass class1 class2 class3 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2', 'class3'],
        )).toBe(expected);
    });
    test('with mods where one mode is false', () => {
        const expected = 'someClass class1 class2 class3 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2', 'class3'],
        )).toBe(expected);
    });
    test('with mods where one mode is undefiend', () => {
        const expected = 'someClass class1 class2 class3 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2', 'class3'],
        )).toBe(expected);
    });
});
