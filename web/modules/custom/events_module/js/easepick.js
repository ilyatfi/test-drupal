const picker = new easepick.create({
    element: '#edit-field-date-value-1',
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
        'https://cdn.jsdelivr.net/npm/@easepick/range-plugin@1.2.1/dist/index.css',
    ],
    plugins: ['RangePlugin'],
    RangePlugin: {
        tooltip: true,
    },
});
