<template>
	<div class="tabar" v-show="isShowTabbar">
		<div class="tab">
			<div class="tab-item">
				<router-link to="/home">
					<div class="tab-icon">
						<i class="icon icon_tab">&#xe64d;</i>	
					</div>
					<div class="tab-text">推荐</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/sport">
					<div class="tab-icon">
						<i class="icon icon_tab">&#xe833;</i>
					</div>
					<div class="tab-text">贷款</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/travel">
					<div class="tab-icon">
						<i class="icon icon_tab">&#xe611;</i>
					</div>
					<div class="tab-text">攻略</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/user">
					<div class="tab-icon">
						<i class="icon icon_tab">&#xe65d;</i>
					</div>
					<div class="tab-text">我的</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	computed: {
		isShowTabbar () {
			let routeLength = this.$route.path.split('/').length
			return routeLength > 2 ? false : true
		}
	}
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';

.tabar{
	.tab{
		position: fixed;
		bottom: 0;
		left: 0;
	    display: flex;
	    width: 100%;
	    height: px2rem(120px);
	    // line-height: px2rem(120px);
	    background: #fff;
		box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
	    &:after{
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			border-top: 1px solid rgba(7, 17, 27, 0.1);
			content: '';
		}
	    .tab-item{
	    	flex: 1;
	    	text-align: center;
			a{
				display: block;
				font-size: 14px;
				color: rgb(77, 85, 93);
					&.active{
						color: #76D49B;
						text-decoration: none;
						.tab-icon{
							.icon_tab{
								color: #76D49B;
							text-decoration: none;
							}
						}
					}
				.tab-icon{
					width: px2rem(50px);
					height: px2rem(50px);
					margin: 0 auto;
					// img{
					// 	width: 100%;
					// }
					padding-top: px2rem(30px);
					.icon_tab{
						color:#333;
						font-size:20px;
					}
					
				}

				
				.tab-text{
					height: px2rem(30px);
					line-height: px2rem(30px);
				}
			}
			
	    }
	}
}
</style>