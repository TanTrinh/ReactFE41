export const themSanPhamAction = (sanPham) => {
    return {
        type: "THEM_SAN_PHAM",
        sanPham,
    }
}

export const tangSoLuong = (maSP) => {
    return {
        type: "TANG_SO_LUONG",
        maSP,
    }
}

export const giamSoLuong = (maSP) => {
    return {
        type: "GIAM_SO_LUONG",
        maSP,
    }
}