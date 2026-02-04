
const rowsNumber = 50;
const colsNumber = 50;
// // const random_nun_tree = Math.floor(Math.random() * 3)
// // const arr_num_tree = [];



// // for (let t = 0; t < random_nun_tree;) {
// //     let num = Math.floor(Math.random() * 50)
// //     if (arr_num_tree.length === 0) {
// //         arr_num_tree.push(num)
// //         t++;
// //     }
// //     else if (arr_num_tree.length === 1) {
// //         if (num < arr_num_tree[0]) {
// //             if ((arr_num_tree[0] - num) > 8) {
// //                 arr_num_tree.splice(0, 0, num)
// //                 t++;
// //             }
// //         }
// //         else if (num > arr_num_tree[0]) {
// //             if ((num - arr_num_tree[0]) > 8) {
// //                 arr_num_tree.splice(1, 0, num)
// //                 t++;
// //             }
// //         }
// //     }
// //     else {
// //         for (let i = 0; i < arr_num_tree.length; i++) {
// //             if (i === 0) {
// //                 if (num < arr_num_tree[i]) {
// //                     if ((arr_num_tree[i] - num) > 8) {
// //                         arr_num_tree.splice(0, 0, num)
// //                         t++;
// //                         break;
// //                     }
// //                     else {
// //                         break;
// //                     }
// //                 }
// //                 i++;
// //                 if (i !== 0 && i !== arr_num_tree.length) {
// //                     if (num > arr_num_tree[i] - 1 && num < arr_num_tree[i] + 1) {
// //                         if ((num - arr_num_tree[i] - 1) > 8 && (arr_num_tree[i] + num) > 8) {
// //                             arr_num_tree.splice(i, 0, num)
// //                             t++;
// //                             break;
// //                         }
// //                         else {
// //                             break;
// //                         }
// //                     }
// //                 }
// //                 else {
// //                     if (num > arr_num_tree[i]) {
// //                         if ((num - arr_num_tree[i]) > 8) {
// //                             arr_num_tree.splice(i, 0, num)
// //                             t++;
// //                             break;
// //                         }
// //                         else {
// //                             break;
// //                         }
// //                     }
// //                     break;
// //                 }
// //             }
// //         }
// //     }
// // }
// // console.log(arr_num_tree);








// const max_trees = 7; 
// const random_nun_tree = Math.floor(Math.random() * (max_trees + 1));
// const arr_num_tree = [];
// const tree_width = 7;
// const min_dist = 8; 

// let attempts = 0; 

// while (arr_num_tree.length < random_nun_tree && attempts < 100) {
//     let num = Math.floor(Math.random() * 50);
    
    
//     const withinBounds = (num >= 0 && num <= (50 - tree_width));
    
    
//     const isFarEnough = arr_num_tree.every(existingNum => 
//         Math.abs(existingNum - num) >= (tree_width + 1) 
//     );

//     if (withinBounds && isFarEnough) {
//         arr_num_tree.push(num);
//         arr_num_tree.sort((a, b) => a - b);
//     }
    
//     attempts++; 
// }

// console.log(`נוצרו ${arr_num_tree.length} עצים:`, arr_num_tree);

// // console.log(arr_num_tree);





// for (let r = 1; r <= rowsNumber; r++) {
//     for (let c = 1; c <= colsNumber; c++) {
//         const block = document.createElement('div');



//         // if (r === 12) {
//         //     if (arr_num_tree.includes(c)) {
//         //         block.id = 'tree';
//         //     }
//         //     else {
//         //         block.id = 'sky';
//         //     }
//         // }

//     if (r === 12) {
//     // בודק אם הטור הנוכחי נמצא בטווח של אחד העצים (מ-c עד c+6)
//     // const isTreePart = arr_num_tree.some(startPos => c >= startPos && c < startPos + tree_width);
    
//     if (arr_num_tree.includes(c)) {
//         block.id = 'tree';
//         } else {
//             block.id = 'sky';
//         }
//     }


//         if (r >= 13 && r < 18) {
//             block.id = 'stone';
//         } else if (r > 17) {
//             block.id = 'ground';
//         }
//         document.body.appendChild(block);
//     }
// }


// document.body.addEventListener('click', (event) => {
//     const target = event.target;

//     if (target.id === 'ground' || target.id === 'stone') {
//         target.id = 'sky';
//     }
// });





const max_trees = 7; 
const random_nun_tree = Math.floor(Math.random() * (max_trees + 1));
const arr_num_tree = [];
const min_dist = 7; 

let attempts = 0; 

while (arr_num_tree.length < random_nun_tree && attempts < 100) {
    let num = Math.floor(Math.random() * colsNumber) + 1; // מיקום אקראי בין 1 ל-50
    
    // בדיקה: האם המרחק מכל עץ קיים גדול מ-7
    const isFarEnough = arr_num_tree.every(existingNum => 
        Math.abs(existingNum - num) > min_dist
    );

    if (isFarEnough) {
        arr_num_tree.push(num);
    }
    attempts++; 
}

for (let r = 1; r <= rowsNumber; r++) {
    for (let c = 1; c <= colsNumber; c++) {
        const block = document.createElement('div');

        if (r < 12) {
            block.id = 'sky';
        } else if (r === 12) {
            // כאן השינוי: בודקים רק אם הטור הנוכחי הוא בדיוק אחד המיקומים במערך
            if (arr_num_tree.includes(c)) {
                block.id = 'tree';
            } else {
                block.id = 'sky';
            }
        } else if (r >= 13 && r < 18) {
            block.id = 'stone';
        } else {
            block.id = 'ground';
        }
        document.body.appendChild(block);
    }
}
