
const DomTestSupport = document => {
    const click = element => {
        const clickEvent = new window.MouseEvent('click', {button: 0});
        element.dispatchEvent(clickEvent);
    }

    const getAllByDataAttribute = dataAttribute => {
        return document.querySelectorAll(`[${dataAttribute}]`);
    }

    const getByTestId = testId => {
        return document.querySelectorAll(`[data-test-id='${testId}']`)[0]
    }

    const getTextContentByTestId = testId => {
        return getByTestId(testId).textContent
    }

    return {
        click,
        getByTestId,
        getTextContentByTestId,
        getAllByDataAttribute,
    }
}

export default DomTestSupport
