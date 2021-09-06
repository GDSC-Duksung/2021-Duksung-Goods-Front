import React from 'react';
import styled from "styled-components";

const WishHeader = () => {
    //상품 카테고리(전체, 실수요, 가수요)
    const List = styled.ul`
	        display:inline-block;
            list-style:none;
    `
    const Item = styled.li`
            float:left;
            position:relative;
    `
    return (
        <div>
            <h3>관심 목록</h3>
            <List>
                <Item><a href="../pages/WishPage">전체상품</a>|</Item> 
                <Item><a href="../pages/WishPage">가수요조사</a>|</Item>
                <Item><a href="../pages/WishPage">실수요조사</a>|</Item>
            </List>
        </div>
    );
};

export default WishHeader;